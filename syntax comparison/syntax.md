# Kolmogorv complexity
This  is a measure of the complexity of a set of syntax to see if korvaq is simpler than python and javascript.
Here the lower the number the simpler the syntax will be. 

NOTE: We used only a few syntax of each language for this comparison, the real complexity of each language is much more than this if we compared with all the features and when doing this, the language with the least features would get the lowest score.

NOTE: This is not a truly accurate measure of complexity. It is impossible to measure the exact simplicity of a language using Kolmogorov complexity, and the true simplicity of a language depends on personal preference. It is up to you to decide if a language is simple or hard.


# Korvaq:

| Syntax      | Syntax To Bits  | Result (bits) |
|-------------|------------------|----------------|
| let         | 3 * 8            | 24             |
| make        | 4 * 8            | 32             |
| show        | 4 * 8            | 32             |
| if          | 2 * 8            | 16             |
| else        | 4 * 8            | 32             |
| loop        | 4 * 8            | 32             |
| while       | 5 * 8            | 40             |
| func        | 4 * 8            | 32             |
| arradd      | 6 * 8            | 48             |
| arrdel      | 6 * 8            | 48             |
| arr         | 3 * 8            | 24             |
| //          | 2 * 8            | 16             |
| async       | 5 * 8            | 40             |
| read        | 4 * 8            | 32             |
| arrsize     | 7 * 8            | 56             |
| **Total**   | **---** | **504**                 |
| **Bits per syntax** | **---** | **32**          |


# Python:

| Syntax               | Syntax To Bits  | Result (bits) |
|----------------------|------------------|----------------|
| =                    | 1 * 8            | 8              |
| def                  | 3 * 8            | 24             |
| print                | 5 * 8            | 40             |
| if                   | 2 * 8            | 16             |
| else                 | 4 * 8            | 32             |
| for                  | 3 * 8            | 24             |
| while                | 5 * 8            | 40             |
| def                  | 3 * 8            | 24             |
| .append()           | 9 * 8            | 72             |
| .remove()           | 9 * 8            | 72             |
| [0] (index value)   | 3 * 8            | 24             |
| #                    | 1 * 8            | 8              |
| async                | 5 * 8            | 40             |
| .read()             | 7 * 8            | 56             |
| len()               | 5 * 8            | 40             |
| **Total**           | **---**          | **520**        |
| **Bits per syntax** | **---**          | **34.29**      |



# Javascript:

| Syntax               | Syntax To Bits  | Result (bits) |
|----------------------|------------------|----------------|
| let                  | 3 * 8            | 24             |
| const                | 5 * 8            | 40             |
| console.log()       | 13 * 8           | 104            |
| if                   | 2 * 8            | 16             |
| else                 | 4 * 8            | 32             |
| for                  | 3 * 8            | 24             |
| while                | 5 * 8            | 40             |
| function             | 8 * 8            | 64             |
| .push                | 5 * 8            | 40             |
| .pop                 | 4 * 8            | 32             |
| [0] (1st-index)     | 3 * 8            | 24             |
| //                   | 2 * 8            | 16             |
| async                | 5 * 8            | 40             |
| readFile            | 8 * 8            | 64             |
| .length             | 7 * 8            | 56             |
| **Total**           | **---**          | **616**        |
| **Bits per syntax** | **---**          | **40**         |
