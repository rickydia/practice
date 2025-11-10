from pydantic import BaseModel
from typing import Optional, List
from fastapi import APIRouter
from sqlalchemy.orm import joinedload

from api.models import Routine, Workout
from api.deps import db_dependency, user_dependency

router = APIRouter(prefix="/routines", tags=["routines"])


class RoutineBase(BaseModel):
    name: str
    description: Optional[str] = None


class RoutineCreate(RoutineBase):
    workouts: List[int] = []


@router.get("/")
def get_routines(db: db_dependency, user: user_dependency):
    return (
        db.query(Routine)
        .options(joinedload(Routine.workouts))
        .filter(Routine.user_id == user["id"])
        .all()
    )


@router.post("/")
def create_routine(db: db_dependency, user: user_dependency, routine: RoutineCreate):
    db_routine = Routine(
        name=routine.name, description=routine.description, user_id=user["id"]
    )
    for workout_id in routine.workouts:
        workout = db.query(Workout).filter(Workout.id == workout_id).first()
        if workout:
            db_routine.workouts.append(workout)
    db.add(db_routine)
    db.commit()
    db.refresh(db_routine)
    db_routines = (
        db.query(Routine)
        .options(joinedload(Routine.workouts))
        .filter(Routine.id == db_routine.id)
        .first()
    )
    return db_routines


@router.delete("/")
def delete_routine(db: db_dependency, user: user_dependency, routine_id: int):
    routine = db.query(Routine).filter(Routine.id == routine_id).first()
    if routine:
        db.delete(routine)
        db.commit()
    return routine
