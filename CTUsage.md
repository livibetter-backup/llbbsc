[[CT](http://code.google.com/p/llbbsc/wiki/CT) | [Installation](http://code.google.com/p/llbbsc/wiki/CTInstall) |
[Upgrading](http://code.google.com/p/llbbsc/wiki/CTUpgrade) |
[Usage](http://code.google.com/p/llbbsc/wiki/CTUsage) | [CSS Customization](http://code.google.com/p/llbbsc/wiki/CTCSSCustomization) | [Testing](http://code.google.com/p/llbbsc/wiki/CTTest) | [Theme Modification](http://code.google.com/p/llbbsc/wiki/CTThemeModification)]

# Introduction #
CT is designed for being used without any modifications. However you may need to [modify your theme](http://code.google.com/p/llbbsc/wiki/CTThemeModification).

Your home page of blog should have something different after activating CT. If you can't see any please read [Testing](http://code.google.com/p/llbbsc/wiki/CTTest).

# Options #
## General Options ##
### Institution ###
Some citation style may need this. It maybe different than your blog's name.

### Modes ###
  * Single Post Mode: Options under this mode are for accessing URI like `/blog/2007/11/17/come-to-your-senses/`.  It also means you only can read one post on that page.
  * Multi-post Mode: Options under this mode are for accessing URIs like `/blog/`, `/blog/category/projects/`, `/blog/tag/linux/`, `/blog/2007/11/`, etc. It also means you can read more than one post on such kinds of URIs.
  * Widget Mode: Options under this mode are
    1. for CT Widget
    1. for being used in calling CT widget rendering function if not applicable to using CT as widget because your theme doesn't support it.

### Providing Methods ###
Each mode above may have the following citations providing methods:
  * Disable: By checking this to not show citations to visitors.
  * Automatic: By checking this to directly append citations right after post's content.
  * Manual: By checking this to allow visitors to get citation by a click.
    * Dynamic: If you also check this, after visitors clicking on "Cite this...", then the citations will be loaded in-page, not redirect to a citation-only page.
    * Popup: If you also check this, after visitors clicking on "(new window)", then brings up a new browser window with the citations.

# Overrides Options #
You can override General Options in previous section using post custom field, by creating a field `CT` with value syntax:
  * `disable` - Disable "Cite this".
  * `mode=(auto|manual)&dynamic=(true|false)&popup=(true|false)&styles=(apa,mla,...)`

For example: `mode=manual&dynamic=false&styles=apa`

![http://llbbsc.googlegroups.com/web/CT-OverridingOptions.png](http://llbbsc.googlegroups.com/web/CT-OverridingOptions.png)

**Note**:
  * Overriding affects Single Post Mode and Multi-post Mode.
  * Each key-value pair is optional.
  * Citation texts' visibilities and their order still depend on Citation Styles options.

**Best use of overriding**:
  * Most of your posts are informative - Overrides those are not informative with meta as `CT:disable`.
  * Most of your posts are not informative - Overrides those are informative with meta such as `CT:mode=auto` and disable Single Post Mode and Multi-post Mode.