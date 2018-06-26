'use strict';

// the ext needs info from a persistent variable as soon as it's installed
// .runtime.onInstalled.addListener
chrome.runtime.onInstalled.addListener(function() {
	// uses the storage API. this API must be registered under the "permissions" field in the manifest
	chrome.storage.sync.set({color: '#3aa757'}, function() {
		console.log("The color is green.");
	});
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'developer.chrome.com'},
			})
			],
					actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});

