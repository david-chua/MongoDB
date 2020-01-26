## Readable Streams

* Description:  Streams from which we can read (consume) data
* Example: http requests/ fs read streams
* Important Events: data, end
* Important functions: pipe(), read()

## Writable Streams

* Description: Streams to which we can write data
* Example: http responses/ fs write streams
* Important Events: drain/ finish
* Important Functions: write()/ end()

## Duplex Streams

* Description: Streams that are both readable and writable at the same time
* Example: Web socket


## Transform Streams:

* Description: Duplex streams that transform data as it is written or read
* Example: zlib Gzip creation
