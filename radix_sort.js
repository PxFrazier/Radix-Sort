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

    let iterator = MAX() - 1;
    
    while(iterator >= 0)
    {
        let buckets = [...Array(255)].map(()=>[]);
        input_array.forEach(entry=>{
            iterator < entry.length && entry.length != 1 ?
            buckets[entry.charCodeAt(iterator)].push(entry) :
            buckets[entry.charCodeAt(entry.length - 1)].unshift(entry);
        });
        input_array = [].concat.apply([], buckets);
        iterator--;
    }
    return input_array;
}

let array = ['one', 'two', 'three', 'four', '1', '2', '3', '4'];

console.log(radixSort(['dfg', 'ytr', 'jhgf', 'asd', 'aaasdf', 'z', './', '/lkk..']));
//Outputs: ['./', '/lkk..', 'aaasdf', 'asd', 'dfg', 'jhgf', 'ytr', 'z']

console.log(radixSort(array));
//Outputs: ['1', '2', '3', '4', 'four', 'one', 'three', 'two']

console.log(radixSort(['cccc', 'c', 'cc', 'ccc']));
//Outputs: ['c', 'cc', 'ccc', 'cccc']

console.log(radixSort(['a', 'aasd', 'cab', 'cba', 'c', 'b', 'ffbba', 'd']));
//Outputs: ['a', 'aasd', 'b', 'c', 'cab', 'cba', 'd', 'ffbba']
