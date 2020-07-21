import * as React from 'react';
import Navbar from '../components/NavBar'
import { useState } from 'react';


const Home: React.FC<IHomeProps> = () => {

    const [username, setUsername] = useState<string>('')
    const [selectedFile, setSelectedFile] = useState<File>(null)

    // random key is used to re-render the file input === toString upto 36 digits
    const [randomKey, setRandomKey] = useState<string>(Math.random().toString(36))

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFile(e.target.files[0])
    }

    const handleUpload = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // newUser fetches the form data, it appeneds key/value pairs from form below (username and file)
        const newUser = new FormData();
        newUser.append('username', username)
        newUser.append('avatar', selectedFile)
        const res = await fetch(`/api/home`, {
            method: 'POST',
            body: newUser
        });
        if (res.ok) {
            setUsername('');
            setSelectedFile(null)
            setRandomKey(Math.random().toString(36))
        }
    }

    return (
        <>
            <Navbar />
            <main className="container">
                <h1 className="mt-5 text-center border border-left-0 border-right-0 page-title">Home</h1>
                <section className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <form className="form-group border rounded-lg p-3 shadow">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                        placeholder="Enter Your Name"
                                        type="text"
                                        className="form-control"
                                        id="username"
                                    />
                                </div>
                            </div>
                            <div className="row mt-2 justify-content-between align-items-center">
                                <div className="col-8">
                                    <label htmlFor="avatar">Avatar</label>
                                    <input
                                        //==== if a key changes, it re-renders ==== used to clear the file ===== 
                                        key={randomKey}
                                        onChange={handleFileChange}
                                        className="form-control-file "
                                        type="file"
                                        id="avatar" />
                                </div>
                                <div className="col-4 d-flex justify-content-end ">
                                    <img
                                        className="img-thumbnail"
                                        style={{ height: "64px", width: "64 px", objectFit: "contain" }}
                                        src={selectedFile ? URL.createObjectURL(selectedFile) : "https://via.placeholder.com/64"}
                                        alt="avatar" />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <button
                                        onClick={handleUpload}
                                        className="btn btn-outline-primary btn-block mt-3">Upload</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </section>

            </main>
        </>
    )
}

export interface IHomeProps { };

export default Home;