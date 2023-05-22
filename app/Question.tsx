import { shuffleArr } from './utils';

const clean = (answer : string) : string => { 
    return answer ? answer.slice(2) : '';
};

export default function Question({children, question, a, b, c, d, e} : {children: React.ReactNode, question: string, a : string, b : string, c : string, d : string, e : string}) {
    let shuffled = shuffleArr([a, b, c, d, e]);
    // console.log([a,b,c,d,e])
    return (
        <div className="mx-10"> {question} <br /><br/>
            <div className="text-left text-xs my-1">A {clean(shuffled[0])}</div>
            <div className="text-left text-xs my-1">B {clean(shuffled[1])} </div>
            <div className="text-left text-xs my-1">C {clean(shuffled[2])}</div>
            <div className="text-left text-xs my-1">D {clean(shuffled[3])}</div>
            <div className="text-left text-xs my-1">E {clean(shuffled[4])}</div>
            <br/>

        </div>
    )
}
