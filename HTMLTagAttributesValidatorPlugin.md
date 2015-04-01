**[[HOME](http://code.google.com/p/llbbsc/) | [GET SUPPORT](http://groups.google.com/group/llbbsc) | [REPORT A BUG](http://code.google.com/p/llbbsc/issues/list) | [REQUEST A FEATURE](http://code.google.com/p/llbbsc/issues/list)]**

# Introduction #

This plugin can validate more deeper. Not only the HTML tag's attributes, but also the contents of attributes. You can set your own regular expression for attributes. For example, you want limit users to post Flash videos only from YouTube or Google, then you can restrain the `src` attribute.

## Demonstration ##

  * [Embedded YouTube video](http://www.livibetter.com/it/topic/0118-999-881-999-119-7253)
  * [A floating right image](http://www.livibetter.com/it/topic/plugin-html-tag-attributes-validator)

## Features ##

  * Support YouTube and Google Video's embedding code.
  * Support `img` tag.
  * You can add yours.

# Download #

## Quick way ##

Download [HTMLTagAttributesValidator.php](http://llbbsc.googlecode.com/svn/trunk/bbPress/HTMLTagAttributesValidator/HTMLTagAttributesValidator.php) only.

## Subversion way ##

Run `svn checkout http://llbbsc.googlecode.com/svn/trunk/bbPress/HTMLTagAttributesValidator/ HTMLTagAttributesValidator`

# Installation #

## Basic Steps ##

  * Upload `HTMLTagAttributesValidator` to `my-plugins`.
  * Activate

## Customization ##

Check the function `SampleTags` in source:
```
function SampleTags($tags) {
  $tags['img'] = array('src'   => array('/(jpg|jpeg|gif|png)$/i'),
                       'title' => array(),
                       'alt'   => array(),
                       'class' => array('/^(left|right)$/'));
  
  $tags['object'] = array('width'  => array(),
                          'height' => array(),
//                          'style'  => array(),
                          'class'  => array('/^(left|right)$/'));
  $tags['param'] = array('name'   => array(),
                         'value'  => array());
  $tags['embed'] = array('src'       => array('/^http:\/\/www.youtube.com\/v\/.*/',
                                              '/^http:\/\/video.google.com\/googleplayer.swf\?.*/'),
//                         'style'     => array(),
                         'type'      => array('/application\/x-shockwave-flash/'),
                         'id'        => array(),
                         'flashvars' => array(),
                         'wmode'     => array(),
                         'width'     => array(),
                         'height'    => array());
  return $tags;
  }
```
You can have more then one regular expressions to one attribute. This plugin checks if any of those regular expressions is matched, then this attribute will be kept, otherwise it will be removed.

You can provide some `class`es for users instead of allowing `style`. Users may use `style` to mess up your layout.

# Known Issues #
The `kses.php` protects forum from evil scripts, but also break some HTML codes.

## Google Videos: width and height ##
The code likes
```
<embed style="width:400px; height:326px;" id="VideoPlayback" type="application/x-shockwave-flash" src="http://video.google.com/googleplayer.swf?docId=1921156852099786640&hl=en" flashvars=""> </embed>
```
kses makes `<embed style="width:400px; height:326px;"` become `<embed style="400px; height:326px;"`. This should be able to be fixed with another filter. However, I don't want to write one, even though that is only one line.

Another solution is rewriting it as `<embed width="400" height="326"`.

## Layout with float: left or class left ##
```
<object width="425" height="355" class="left"><param name="movie" value="http://www.youtube.com/v/s2Q6xbEZ-f0&rel=1"></param><param name="wmode" value="transparent"></param><embed src="http://www.youtube.com/v/s2Q6xbEZ-f0&rel=1" type="application/x-shockwave-flash" wmode="transparent" width="425" height="355"></embed></object>My Text Here
```
Don't add your text right after an object with `class="left"`. It will slightly mess up the layout. Use this, instead:
```
<object width="425" height="355" class="left"><param name="movie" value="http://www.youtube.com/v/s2Q6xbEZ-f0&rel=1"></param><param name="wmode" value="transparent"></param><embed src="http://www.youtube.com/v/s2Q6xbEZ-f0&rel=1" type="application/x-shockwave-flash" wmode="transparent" width="425" height="355"></embed></object>

My Text Here
```
Let them belong to different paragraphs (put a line break between them).

## Closing `img` tag ##
If you use
```
<img src="/images/icons/forgetIT.png" alt="Sample Image" title="Sample Image" class="right"/>
```
, then that results
```
<img src="/images/icons/forgetIT.png" alt="Sample Image" title="Sample Image">
```
If you use
```
<img src="/images/icons/forgetIT.png" alt="Sample Image" title="Sample Image" class="right" />
```
, this will be fine. There is an additional space.