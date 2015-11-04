# data-fields 

A collection of data field modules for use with [data-ui](https://github.com/editdata/data-ui) modules.

## Installation

```sh
npm install data-fields --save
```

## API of each field

All fields have at least the following API:

```
field.on('update', function (e, value) {
  // update state of application with new value
  state.value = value
})

field.render(h, { value: state.value })
```

## Dependencies

- [data-field-geojson](https://github.com/editdata/data-field-geojson)
- [data-field-image](https://github.com/editdata/data-field-image)
- [data-field-list](https://github.com/editdata/data-field-list)
- [data-field-string](https://github.com/editdata/data-field-string)
- [data-field-url](https://github.com/editdata/data-field-url)

## License

MIT
