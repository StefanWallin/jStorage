#jStorage - Storage made Easy#

jStorage helps you get started with using cloud storage (Like Dropbox or GitHub).
With jStorage you just need to learn 1 API and you can easily add support for more providers in your project.

 Storage		|     Status    |     Address    |
:---------------|:--------------|:---------------
 GitHub			| Planned 		|	https://github.com/
 Dropbox		| Implemented	|	https://www.dropbox.com/
 MS Azure		| Planned 		|	https://account.windowsazure.com/Home/Index
 SkyDrive 		| Planned 		|	https://skydrive.live.com/
 Google Drive 	| Planned 		|	https://skydrive.live.com/
 Box			| Planned 		|	https://www.box.com/


##Prepare provider(s)##

Depending on the storage provider you want to use you need to do some steps at the provider to prepare it for usage.
Below we are listing the steps needed for every provider.

_Preparing Dropbox_

1. Go to: https://www.dropbox.com/developers/apps
2. Click the "Create app"
3. Choose "Dropbox API app" and "Files and datastores".
4. Either choose own folder for your app or access to all files in Dropbox (If you are unsure, use own folder for app. It is more secure for both you and the user)
5. Enter app name (This name will be visible for your users so choose a good one).
6. Write down the "App Key" for later use.
7. Write a address into "OAuth redirect URIs", this is the address the user will be sent to after giving your app permissions. Please note that it MUST to start with "https://" to work if you are using a DNS.


##Setup##

include
```html
<script src="jStorage.js">
```
and the approperate module that represent the storage you want to use.
You can use all of them at the same time.

```html
<script src="jStorage.dropbox.js">
<script src="jStorage.github.js">
```

##API##

###jStorage(initConfig)###

_Dropbox_

```js
var storage = jStorage({
	'name': 'dropbox',
	'appKey': 'APP KEY YOU SAVED FROM STEP 6 IN PREPARE DROPBOX SECTION',
	'callback': function(storage, callStatus) {
		if (callStatus.isOK) {
			// dropbox storage are now ready to be used.
		}
	}
});
```

_GitHub_

```js
var storage = jStorage({
	'name': 'github',
	'callback': function(storage, callStatus) {
		if (callStatus.isOK) {
			// github storage are now ready to be used.
		}
	}
});
```


###get(file_path, callback(file, callStatus))###

Read content of file.

```js
storage.get('testing.txt', function(file, callStatus) {
	if (callStatus.isOK) {

	}
});
```

###getMeta(file_path, callback(fileMeta, callStatus))###

Read metadata for file.

```js
storage.get('testing.txt', function(fileMeta, callStatus) {
	if (callStatus.isOK) {

	}
});
```

###set(file_path, content, callback(callStatus))###

Write file content.

```js
storage.set('testing.txt', 'Hello World!', function(callStatus) {
	if (callStatus.isOK) {

	}
});
```

###del(file_path, callback(callStatus))###

Remove file.

```js
storage.del('testing.txt', function(callStatus) {
	if (callStatus.isOK) {

	}
});
```

###lists(directory_path, callback(fileMeta[], callStatus))###

List all files in directory.

```js
storage.lists('testing.txt', function(files, callStatus) {
	if (callStatus.isOK) {
		for(var i = 0; i < files.length; i++) {
			// files[i].name
		}
	}
});
```

###exists(file_path, callback(bool, callStatus))###

Does file exists?

```js
storage.exists('testing.txt', function(file_exists, callStatus) {
	if (callStatus.isOK) {
		if (file_exists) {
			// File exists
		} else {
			// File didn't exist
		}
	}
});
```


###initConfig###



```js
{
	'name': 'dropbox',
	[...]
	'callback': function(callStatus) {

	}
}
```

###callStatus###

Indicate if the call was successfull or not.
Object has the following properties:

- isOK - is true or false, depending on if the call was successfull or not.
- msg - human readable status message
- code - status code, can be used to do different actions depending on value. read more on the specific method to get all possible values.

```js
{
	'isOK': true,
	'code': 0,
	'msg': ''
}
```

###file###

Object used in get method, object has the following properties:
- name - filename including extension and directory.
- size - size in bytes, represented by long.
- mime-type - mime type of file.
- modified - date file was modified.
- data - content of file as string or byte array.

```js
{
	'name': 'testing.txt',
	'size': 1024,
	'mime-type': 'text/html',
	'modified': Wed Jan 01 2014 15:11:07 GMT+0100 (W. Europe Standard Time),
	'data': byte array or string depending on mime-type
}
```

###fileMeta###

Object returned for getMeta and list methods, object has the following properties:
- name - filename including extension and directory.
- size - size in bytes, represented by long.
- mime-type - mime type of file.
- modified - date file was modified.

```js
{
	'name': 'testing.txt',
	'size': 1024,
	'mime-type': 'text/html'
	'modified': Wed Jan 01 2014 15:11:07 GMT+0100 (W. Europe Standard Time)
}
```
