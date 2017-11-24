require 'compass/import-once/activate' 
# Require any additional compass plugins here. 

require 'breakpoint' 
require 'susy' 

# Set this to the root of your project when deployed: 
http_path = "/" 
css_dir = "css" 
sass_dir = "sass" 
images_dir = "images" 
javascripts_dir = "js" 

# You can select your preferred output style here (can be overridden via the command line): 
# output_style = :expanded (選取器分成多行，給人看的) or :nested or :compact (選取器分行，但內容整理成一行) or :compressed (全部css壓成1行)
output_style = :compressed

# To enable relative paths to assets via compass helper functions. Uncomment: 
relative_assets = true 

# To disable debugging comments that display the original location of your selectors. Uncomment: 
line_comments = false 

# If you prefer the indented syntax, you might want to regenerate this 
# project again passing --syntax sass, or you can uncomment this: 
# preferred_syntax = :sass 
# and then run: 

Encoding.default_external = "utf-8" 
sourcemap = true 

# 關閉 compass cache_buster,使用compass image-url產生圖檔路徑,預設會加上cache_burster
asset_cache_buster {|*args| nil }