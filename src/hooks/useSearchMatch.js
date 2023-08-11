import { ref, computed } from 'vue';

export default function useSearchMatch(arrayToMatch){

    const findWord = ref('');
    console.log(arrayToMatch.value)
    const searchMatch = computed(()=>{
        // console.log(arrayToMatch.value);
        return arrayToMatch.value.filter((elm)=>elm.toLowerCase().includes(findWord.value.toLowerCase()));
        // console.log(arrayToMatch.value);
        
    })

    return { findWord, searchMatch }
}