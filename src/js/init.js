document.addEventListener('DOMContentLoaded', function() {
  // Dropdown
  var elems = document.querySelectorAll('.dropdown-trigger');
  var options = {
    /*     alignment: 'left', //Defines the edge the menu is aligned to.
    autoTrigger: true, //If true, automatically focus dropdown el for keyboard.
    constrainWidth: true, //If true, constrainWidth to the size of the dropdown activator.
    container: null, //Provide an element that will be the bounding container of the dropdown. */
    coverTrigger: false, //If false, the dropdown will show below the trigger.
    /*     closeOnClick: true, //If true, close dropdown on item click.
    hover: false, //If true, the dropdown will open on hover.
    inDuration: 150, //The duration of the transition enter in milliseconds.
    outDuration: 250, //The duration of the transition out in milliseconds.
    onOpenStart: null, //Function called when dropdown starts entering.
    onOpenEnd: null, //Function called when dropdown finishes entering.
    onCloseStart: null, //Function called when dropdown starts exiting.
    onCloseEnd: null, //Function called when dropdown finishes exiting */
  };
  var instances = M.Dropdown.init(elems, options);

  // Parallax
  var elems = document.querySelectorAll('.parallax');
  /*   var options = {
    responsiveThreshold: 0, //The minimum width of the screen, in pixels, where the parallax functionality starts working.
  }; */
  var instances = M.Parallax.init(elems);

  // Carousel
  var elems = document.querySelectorAll('.carousel');
  /*   var options = {
    duration: 200, //Transition duration in milliseconds.
    dist: -100, //Perspective zoom. If 0, all items are the same size.
    shift: 0, //Set the spacing of the center item.
    padding: 0, //Set the padding between non center items.
    numVisible: 5, //Set the number of visible items.
    fullWidth: false, //Make the carousel a full width slider like the second example.
    indicators: false, //Set to true to show indicators.
    noWrap: false, //Don't wrap around and cycle through items.
    onCycleTo: null, //Callback for when a new slide is cycled to.
  }; */
  var instances = M.Carousel.init(elems);

  // Collapsible
  var elems = document.querySelectorAll('.collapsible');
  /*   var options = {
    accordion: true, //If accordion versus collapsible.
    onOpenStart: null, //Callback function called before collapsible is opened.
    onOpenEnd: null, //Callback function called after collapsible is opened.
    onCloseStart: null, //Callback function called before collapsible is closed.
    onCloseEnd: null, //Callback function called after collapsible is closed.
    inDuration: 300, //Transition in duration in milliseconds.
    outDuration: 300, //Transition out duration in milliseconds..
  }; */
  var instances = M.Collapsible.init(elems);

  // FeatureDiscovery
  var elems = document.querySelectorAll('.tap-target');
  /*   var options = {
    onOpen: null, //Callback function called when Tap Target is opened.
    onClose: null, //Callback function called when Tap Target is closed.
  }; */
  var instances = M.TapTarget.init(elems);

  // Media
  var elems = document.querySelectorAll('.materialboxed');
  /*   var options = {
    inDuration: 275, //Transition in duration in milliseconds.
    outDuration: 200, //Transition out duration in milliseconds.
    onOpenStart: null, //Callback function called before materialbox is opened.
    onOpenEnd: null, //Callback function called after materialbox is opened.
    onCloseStart: null, //Callback function called before materialbox is closed.
    onCloseEnd: null, //Callback function called after materialbox is closed.
  }; */
  var instances = M.Materialbox.init(elems);

  // Modal
  var elems = document.querySelectorAll('.modal');
  /*   var options = {
    opacity: 0.5, //Opacity of the modal overlay.
    inDuration: 250, //Transition in duration in milliseconds.
    outDuration: 250, //Transition out duration in milliseconds.
    onOpenStart: null, //Callback function called before modal is opened.
    onOpenEnd: null, //Callback function called after modal is opened.
    onCloseStart: null, //Callback function called before modal is closed.
    onCloseEnd: null, //Callback function called after modal is closed.
    preventScrolling: true, //Prevent page from scrolling while modal is open.
    dismissible: true, //Allow modal to be dismissed by keyboard or overlay click.
    startingTop: '4%', //Starting top offset
    endingTop: '10%', //Ending top offset
  }; */
  var instances = M.Modal.init(elems);

  // Pushpin
  var elems = document.querySelectorAll('.pushpin');
  /*   var options = {
    top: 0, //The distance in pixels from the top of the page where the element becomes fixed.
    bottom: Infinity, //The distance in pixels from the top of the page where the elements stops being fixed.
    offset: 0, //The offset from the top the element will be fixed at.
    onPositionChange: null, //Callback function called when pushpin position changes. You are provided with a position string.
  }; */
  var instances = M.Pushpin.init(elems);

  // Scrollspy
  var elems = document.querySelectorAll('.scrollspy');
  /*   var options = {
    throttle: 100, //Throttle of scroll handler.
    scrollOffset: 200, //Offset for centering element when scrolled to.
    activeClass: 'active', //Class applied to active elements.
    getActiveElement: null, //Used to find active element.
  }; */
  var instances = M.ScrollSpy.init(elems);

  // Sidenav
  var elems = document.querySelectorAll('.sidenav');
  /*   var options = {
    edge: 'left', //Side of screen on which Sidenav appears.
    draggable: true, //Allow swipe gestures to open/close Sidenav.
    inDuration: 250, //Length in ms of enter transition.
    outDuration: 200, //Length in ms of exit transition.
    onOpenStart: null, //Function called when sidenav starts entering.
    onOpenEnd: null, //Function called when sidenav finishes entering.
    onCloseStart: null, //Function called when sidenav starts exiting.
    onCloseEnd: null, //Function called when sidenav finishes exiting.
    preventScrolling: true, //Prevent page from scrolling while sidenav is open.
  }; */
  var instances = M.Sidenav.init(elems);

  // Tabs
  var el = document.querySelectorAll('.tabs');
  var options = {
    duration: 300, //Transition duration in milliseconds.
    /*    onShow: null, //Callback for when a new tab content is shown.
    swipeable: false, //Set to true to enable swipeable tabs. This also uses the responsiveThreshold option.
    responsiveThreshold: Infinity, //The maximum width of the screen, in pixels, where the swipeable functionality initializes. */
  };
  var instance = M.Tabs.init(el, options);

  // Toasts
  // M.toast({ html: 'I am a toast!' });
  /*   var options = {
    html: '', //The HTML content of the Toast.
    displayLength: 4000, //Length in ms the Toast stays before dismissal.
    inDuration: 300, //Transition in duration in milliseconds.
    outDuration: 375, //Transition out duration in milliseconds.
    classes: '', //Classes to be added to the toast element.
    completeCallback: null, //Callback function called when toast is dismissed.
    activationPercent: 0.8, //The percentage of the toast's width it takes for a drag to dismiss a Toast.
  }; */

  // Tooltips
  var elems = document.querySelectorAll('.tooltipped');
  /*   var options = {
    exitDelay: 0, //Delay time before tooltip disappears.
    enterDelay: 200, //Delay time before tooltip appears.
    html: null, //Can take regular text or HTML strings.
    margin: 5, //Set distance tooltip appears away from its activator excluding transitionMovement.
    inDuration: 300, //Enter transition duration.
    outDuration: 250, //Exit transition duration.
    position: 'bottom', //Set the direction of the tooltip. 'top', 'right', 'bottom', 'left'.
    transitionMovement: 10, //Amount in px that the tooltip moves during its transition.
  }; */
  var instances = M.Tooltip.init(elems);
});
