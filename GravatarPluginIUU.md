[[Gravatar](http://code.google.com/p/llbbsc/wiki/GravatarPlugin) |
[Screenshots](http://code.google.com/p/llbbsc/wiki/GravatarPluginScreenshots) |
[Install, Upgrade or Uninstall](http://code.google.com/p/llbbsc/wiki/GravatarPluginIUU) |
[Customization](http://code.google.com/p/llbbsc/wiki/GravatarPluginCustomization) |
[Usage](http://code.google.com/p/llbbsc/wiki/GravatarPluginUsage)]

# Installation #


## Basic Steps ##

  * Upload `Gravatar` directory to `my-plugins`, which contains no CHANGES and LICENSE.
  * Activate it.

## Theme Modifications ##

The following assumes using **Kakumei**. You may need to make you own if you use different theme.

### `post.php` and `style.css` ###
line 2 in `post.php`
```
<p><strong><?php post_author_link(); ?></strong><br />
  <small><?php post_author_title(); ?></small></p>
```
Add a line like
```
<p><strong><?php post_author_link(); ?></strong><br />
  <?php GAImageLink() ?><br />
  <small><?php post_author_title(); ?></small></p>
```

Add a new style to `style.css`
```
#thread .post {
    min-height: 64px;
    }
```

You can also add your own styles, and apply `class` to `GAImage()` (Read Usage section for more detail or next subsection for an example).

### `profile.php` ###

You can add a bigger avatar in profile page. Insert a line code before `<?php bb_profile_data(); ?>`, that looks like
```
<?php GAImage(0, 80, 'border: 1px solid gold', 'right'); ?>
<?php bb_profile_data(); ?>
```
Where `right` is a preset class in **Kakumei**. It is `float: right`.
# Upgrading #

This secion will tell you, do you need to upgrade and anything you have to pay attention while upgrading.

## 0.1.x to 0.2 ##
  * Deactivate 0.1.x
  * Remove 0.1.x
  * Upload 0.2 (Since 0.2, it has its own folder)
  * Activate 0.2

# Uninstalltion #

From version 0.2, Gravatar plugin allows you to remove all settings (including data in usermeta) for plugin as well as deactivation of plugin.

  * Go to Options page.
  * Click "Deactivate Plugin" at "Management" section.