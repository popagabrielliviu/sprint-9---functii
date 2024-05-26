


  function addNumber(...theArgs)
         {
            let sum = 0;
            for (const arg of theArgs)
            {
               sum += arg;
            }
            return sum;
         }

         console.log(addNumber(7, 8));
