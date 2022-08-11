# Struktur
- GROSS geschriebene Ordner sind "Kategorie"-Ordner
    - in den _posts-Ordnern sind die jeweiligen Posts
- klein geschriebene Ordner sind "Seiten"-Ordner
    - in "Seiten"-Ordnern gibt es eine index.md, welches die Hub-Seite repräsentiert

# Image viewhelper
- Alternative to responsive images with automatic size calculation
- for min-with 768px and 1366px individual images can be included
{%
    include image.html
    file="brand/n_modelica-ass--color.svg"
    file768=""
    file1366=""
    url="https://www.modelica.org"
    urltitle="Linktitel"
    alt="Jekyll"
    class=""
%}

# Usefull infos
## Plugins
### responsive images
- https://ivovalchev.medium.com/jekyll-responsive-images-with-srcset-5da131415d0f
- https://florian.latzel.io/2020/04/07/co2-sparen-responsive-images-lazyload-jekyll.html

## Forms
- https://formkeep.com/guides/contact-form-jekyll
