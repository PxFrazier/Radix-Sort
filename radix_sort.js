function radixSort(input_array)
{
    const MAX = ()=>{
        let maximum = 0;
        input_array.forEach(entry=>{
            if(maximum < entry.length)
            {
                maximum = entry.length;
            }
        });
        return maximum;
    };

    let maximum = MAX();
    let iterator = maximum - 1, n = maximum - 1;
    
    while(iterator >= 0)
    {
        let buckets = [...Array(255)].map(()=>[]);
        input_array.forEach(entry=>{
            iterator < entry.length ?
            buckets[entry.charCodeAt(iterator)].push(entry) :
            buckets[entry.charCodeAt(iterator - n)].push(entry);
        });
        input_array = [].concat.apply([], buckets);
        iterator--;
        n--;
    }
    return input_array;
}

console.log(radixSort(['dfg', 'ytr', 'jhgf', 'asd', 'aaasdf', 'z']));
//Outputs: ['aaasdf', 'asd', 'dfg', 'jhgf', 'ytr', 'z']
