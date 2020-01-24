Node Uses:
V8 Engine --> Uses C++ and JS
Libuv for Event loops and Thread pool (for networking) - Responsible for executing call backs and file access.  --> Completely written C++
Node also depends on other libraries like http-parse, c-ares, OpenSSL and zlib.

Once all pieces fit together, you have a nodeJS that is able to be used in all applications.

# Processes, Threads, and the Thread Pools.

NodeJS Process --> Intance of a program in execution on a computer.
Single Thread --> Sequence of instruction. Where code is executed. Unique features of NodeJS. All are running in a single thread.
The single thread process allows us to be aware not to block code.

Initialize Program --> Execute "top-level code" --> Require modules --> Register event callbakcs --> Start event loops.
Thread Pool: gives additional threads that separate the event loop. It offloads work from the event loop.
- Handle heavy expensive tasks such as:
* File system APIs
* Cryptography
* Compression
* DNS lookups
