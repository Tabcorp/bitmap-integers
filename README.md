# bitmap-integers

Small utility module to convert between integer representations of bitmaps and arrays

# using in your project
```coffee
  bitmap = require 'bitmap-integers'
```

## Array to Value
### Integer arrays

You can pass in an array of integers you want to set
```coffee
  bitmap.fromIntegerArray [1]     = 1
  bitmap.fromIntegerArray [2]     = 2
  bitmap.fromIntegerArray [1,2]   = 3
  bitmap.fromIntegerArray [3]     = 4
  bitmap.fromIntegerArray [1,3]   = 5
  bitmap.fromIntegerArray [2,3]   = 6
  bitmap.fromIntegerArray [1,2,3] = 7
```

### Little endian boolean array

You can pass in an array of booleans in LE form
```coffee
  bitmap.fromBooleanArrayLE [true]                 = 1
  bitmap.fromBooleanArrayLE [false, true]          = 2
  bitmap.fromBooleanArrayLE [true,  true]          = 3
  bitmap.fromBooleanArrayLE [false, false, true]   = 4
  bitmap.fromBooleanArrayLE [true,  false, true]   = 5
  bitmap.fromBooleanArrayLE [false, true,  true]   = 6
  bitmap.fromBooleanArrayLE [true,  true,  true]   = 7
```

### Big endian boolean array

You can pass in an array of booleans in BE form
```coffee
  bitmap.fromBooleanArrayBE [true]                = 1
  bitmap.fromBooleanArrayBE [true, false]         = 2
  bitmap.fromBooleanArrayBE [true, true]          = 3
  bitmap.fromBooleanArrayBE [true, false, false]  = 4
  bitmap.fromBooleanArrayBE [true, false, true]   = 5
  bitmap.fromBooleanArrayBE [true, true,  false]  = 6
  bitmap.fromBooleanArrayBE [true, true,  true]   = 7
```

## Value to Array
### Integer arrays

You can get an integer array from a value
```coffee
  bitmap.toIntegerArray(1) = [1]    
  bitmap.toIntegerArray(2) = [2]    
  bitmap.toIntegerArray(3) = [1,2]  
  bitmap.toIntegerArray(4) = [3]    
  bitmap.toIntegerArray(5) = [1,3]  
  bitmap.toIntegerArray(6) = [2,3]  
  bitmap.toIntegerArray(7) = [1,2,3]
```

### Little endian boolean array

You can get an array of booleans in LE form
```coffee
  bitmap.toBooleanArrayLE(1) = [true]              
  bitmap.toBooleanArrayLE(2) = [false, true]       
  bitmap.toBooleanArrayLE(3) = [true,  true]       
  bitmap.toBooleanArrayLE(4) = [false, false, true]
  bitmap.toBooleanArrayLE(5) = [true,  false, true]
  bitmap.toBooleanArrayLE(6) = [false, true,  true]
  bitmap.toBooleanArrayLE(7) = [true,  true,  true]
```

### Big endian boolean array

You can get an array of booleans in BE form
```coffee
  bitmap.toBooleanArrayBE(1) = [true]              
  bitmap.toBooleanArrayBE(2) = [true, false]       
  bitmap.toBooleanArrayBE(3) = [true, true]        
  bitmap.toBooleanArrayBE(4) = [true, false, false]
  bitmap.toBooleanArrayBE(5) = [true, false, true] 
  bitmap.toBooleanArrayBE(6) = [true, true,  false]
  bitmap.toBooleanArrayBE(7) = [true, true,  true] 
```

## Testing

```
npm test
```
