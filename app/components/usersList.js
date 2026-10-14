export default function UsersList({users}){
    return(
        <>
        {users.map(user => (
            <h1>{user.name}</h1>
        ))}
        </>
    )
}