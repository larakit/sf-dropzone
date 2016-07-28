<?php
\Larakit\StaticFiles\Manager::package('larakit/sf-dropzone')
    ->setSourceDir('public')
    ->cssPackage('dropzone.css')
    ->jsPackage('dropzone.js')
    ->jsPackage('init.js')
;
