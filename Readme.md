
# crop

  Image cropper

## Installation

    $ component install yields/crop

## Example

```js
var cropper = require('crop')(element);
cropper.build();
cropper.on('crop', function(d){
  console.log(d); // > { left: 10, top: 10, height: 100, width: 100 }
});
```

## API

### cropper(el[, opts])

  Create a new `Cropper` instance with `el` and optional `opts` object.

### cropper.build()

  Build (render) the crop area on `el` and bind all events.

### cropper.destroy()

  destroy the `crop-area` and unbind all events.

## License

  MIT
