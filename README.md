# Angular Edmodo Sign-in Button Directive


[Homepage](https://github.com/sumanthio/ngEdmodo)


A Simple Angular Directive for Edmodo Integration in your app. Specify your client id(s), callback URI(s) and you're done.

## Usage
1. Include `edmodoLogin.js`.
2. Add `ngEdmodo` as a dependency to your app.
3. Add `<edmodo-login></edmodo-login>` to your app where you would want the Edmodo-login Button.
4. The Call back URI would then receive the code and the login can be authenticated as per Edmodo Docs.
5. Step 4 should be preferably done on the Server-side especially if your app uses AngularJS.
	5.a) Because of the "Hashbang" provided by the ngRoute(or ui-router as well). 
	5.b) Edmodo Callbacks shouldn't contain fragments like "#".
5. *Optional:* Track the click event by $window.


## Bower
Installable via `bower`:

```bash
bower install ngEdmodo
```

```html
<div ng-app="myApp">
  <edmodo-login></edmodo-login>
  <p>^ This is an Edmodo Login button</p>
</div>
```

## License
♡ CopyHeart 2015 by [Sumanth Pagidipalli](http://sumanthio.firebaseapp.com) | Copying is an act of love. Please copy.
