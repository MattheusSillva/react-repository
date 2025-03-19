import './MyForm.css'

import { useState } from 'react'

const MyForm = ({ userName, userEmail}) => {
    // 3 - genrenciamento de dados
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);
    
    const [bio, setBio] = useState("");

    const [role, setRole] = useState("");

    const handleName = (e) => {
        setName(e.target.value)
    }

    // 5 - envio de form
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email)

    // Validacao
    // envio

    // 7 - limpar o form

    setName("");
    setEmail("");
    setBio("");
    setRole("")

    }

    console.log(name, email, bio, role)

  return (
    <div>
        {/* 1 - criação de form */}
        {/* 5 - envio de formuário */}
        
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Digite o seu nome:' onChange={handleName}
                // 6 - controlled inputs
                value={name || ""}
                />
            </div>
            {/* 2 - label envolvendo o input */}
            <label>
                <span>E-mail:</span>
                <input type="text" name='emai' placeholder='Digite o seu email' 
                // 4 - simplificando manipulação
                onChange={(e) => setEmail(e.target.value)} value={email || ""}/>
            </label>
            {/* 8 - textarea */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/* 9 - select */}
            <label>
                <span>função no sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário comum</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admistrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm