import Loading from "./loading";
import UserInfo from "./userInfo";

export default function UsersList({ users, loading, deleteUser }) {
    return (
        <section className="mx-auto my-6 max-w-3xl rounded-md bg-white shadow">
            <h2 className="p-4 text-base font-semibold text-gray-900">
                { //enquanto o loading vindo por props for true, vai mostrar o componente de carregamento com a mensagem passada
                    loading ?
                        <Loading textLoading={'Carregando usuários...'} />
                        :
                        //quando loading for false, vai mostrar quantos usuários foram trazidos da api
                        `Usuários (${users.length})`
                }
            </h2>

            <ul>
                {users.map((user) => ( //listagem dinâmica dos usuários
                    <UserInfo onDelete={deleteUser} key={user.id} user={user} /> //cada usuário
                ))}
            </ul>
        </section>
    );
}