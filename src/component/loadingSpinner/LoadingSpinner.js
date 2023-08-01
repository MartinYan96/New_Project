import loading from '../../resources/Spinner.svg'

const LoadingSpinner = () => {
    return <div style={{ height: '100%', background: 'white', display: 'flex', justifyContent: 'center' }} >
        <img alt='' src={loading} style={{ height: '100%', background: 'white' }} />
    </div >
}


export default LoadingSpinner