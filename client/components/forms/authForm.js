const AuthForm = ({
    handleSubmit, name, email, password, secret, setName, setPassword, setSecret, setEmail, page
}) => (
    <form onSubmit={handleSubmit}>
        {page !== "login" && (
            <div className="form-group p-2">
                <small>
                    <label className="text-muted">Your name </label>
                </small>
                <input type="text" values={name} onChange={(event => setName(event.target.value))} className="form-control" placeholder="Enter your name" />
            </div>
        )}


        <div className="form-group p-2">
            <small>
                <label className="text-muted">Email adress </label>
            </small>
            <input type="email" className="form-control" values={email} onChange={(event => setEmail(event.target.value))} placeholder="Enter your email" />

        </div>
        <div className="form-group p-2">
                <small>
                    <label className="text-muted">Your password </label>
                </small>
                <input type="password" className="form-control" placeholder="Enter your password" values={password} onChange={(event => setPassword(event.target.value))} />

            </div>
        {page !== "login" && (<>

           

            <div className="form-group p-2">
                <small>
                    <label className="text-muted">Pick a  question </label>
                </small>
                <select className="form-control p-2">
                    <option>what is your favourite color ?</option>
                    <option>what is your best friend name ?</option>
                    <option>what city you were born ?</option>

                </select>
                <small className="form-text text-muted">
                    you can use this to rest your password
                </small>
            </div>
            <div className="form-group p-2">
                <input type="text" className="form-control" placeholder="write your answer is here" values={secret} onChange={(event => setSecret(event.target.value))} />

            </div>
        </>)}
        <div className="form-group p-">
            <button disabled={page === 'login' ?
                !email || !email :
                !name || !email || !secret || !password} className='btn btn-primary col-12'>
                submit
            </button>
        </div>

    </form>

)

export default AuthForm;