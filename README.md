# Arrows Plugin for krpano viewer

You only need the compacted version of arrows.xml file. You can get it [here](). After that you can:

```xml
<krpano>
	<include url="arrows.xml" />
	...
	<layer name="connections">
		<connection name="scene2" hdir="25.0" />
	</layer>
</krpano>
```

For more details check out documentation or clone the repo.

## Documentation

When plugin page will ba available on [krpano.com](http://krpano.com) there will be a link here.
Otherwise you can follow development guide to setup local server and read documentation offline
on [localhost](http://localhost:8244/arrows/plugin.html)

## Development

Simple node server is used in case you need to try html5 version. Gulp is used to minify xml and
create zip archive to be downloadable from the site. You'll need node and gulp.

```bash
npm install gulp -g
```

After that:

```bash
git clone https://github.com/lonelyelk/krpano-arrows.git
cd krpano-arrows
npm install
node web-server.js
```

Development happens in `dev` folder. To see your modifications in uncompressed arrows.xml file on dev page
use `gulp xml` or just `gulp` that will automatically run minification.