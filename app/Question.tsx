import { shuffleArr } from './utils';

const clean = (answer : string) : string => { 
    return answer ? answer.slice(2) : '';
};

export default function Question({children, question, a, b, c, d} : {children: React.ReactNode, question: string, a : string, b : string, c : string, d : string, e : string}) {
    // let shuffled = shuffleArr([a, b, c, d]);
    // let shuffled = [a,b,c,d]
    let questions = [a, b, c, d]
    // console.log([a,b,c,d,e])
    return (
        <div className="mx-10"> {question} <br /><br/>
            <div className="text-left text-xs my-1">A {questions[0]}</div>
            <div className="text-left text-xs my-1">B {questions[1]} </div>
            <div className="text-left text-xs my-1">C {questions[2]}</div>
            <div className="text-left text-xs my-1">D {questions[3]}</div>
            {/* <div className="text-left text-xs my-1">E {clean(shuffled[4])}</div> */}
            <br/>

        </div>
    )
}
