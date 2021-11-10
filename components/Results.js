import Thumbnail from './Thumbnail'

function Results({results}) {
    return (
        <div className='px-2 sm:grid md:grid-cols-2 lg:grid-cols-3'>
            {results.map((result)=> <Thumbnail key={result.id} result={result}/>)}
        </div>
    )
}

export default Results
