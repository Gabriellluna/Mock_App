export default function UsersList({ users = [] }) {
  return (
    <section className="mx-auto my-6 max-w-3xl rounded-md bg-white shadow">
      <h2 className="p-4 text-base font-semibold text-gray-900">
        Usuários ({users.length})
      </h2>

      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-start justify-between gap-4 border-t border-gray-200 p-4 hover:bg-gray-50"
          >
            <div className="flex items-start gap-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <strong className="block text-gray-900">
                  {user.name}{" "}
                  <span className="text-sm font-normal text-gray-500">
                    @{user.username}
                  </span>
                </strong>
                <p className="text-sm text-gray-600">
                  {user.email} • {user.phone.split(" x")[0]}
                </p>
                <p className="text-sm text-gray-600">{user.address}</p>
                <p className="text-sm text-gray-600">
                  {user.occupation} • Nascimento:{" "}
                  {new Date(user.age).toLocaleDateString("pt-BR", {
                    timeZone: "UTC",
                  })}
                </p>
              </div>
            </div>

            <span className="text-xs text-gray-400">#{user.id}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}