import Loading from "./loading";
import UserInfo from "./userInfo";

export default function UsersList({ users, loading }) {
    return (
        <section className="mx-auto my-6 max-w-3xl rounded-md bg-white shadow">
            <h2 className="p-4 text-base font-semibold text-gray-900">
                {
                    loading ?
                        <Loading textLoading={'Carregando usuários...'} />
                        :
                        `Usuários (${users.length})`
                }
            </h2>

            <ul>
                {users.map((user) => (
                    <UserInfo key={user.id} user={user} />
                ))}
            </ul>
        </section>
    );
}