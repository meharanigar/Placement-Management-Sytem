import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";

function AuthRegister() {
  

  const [nmae, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(null);
  return(
    
    <from>
        <input
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        
          <input
          type="text"
          placeholder="Enter student email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          />
          <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
          />
          <select value="role"
          onChange={(e)=>setRole(e.target.value)}
          >
            <option>Admin</option>
            <option></option>
          </select>


    </from>
  )

}