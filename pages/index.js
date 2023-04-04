import supabase from "@/db_config/supabaseClient";


export async function getServerSideProps() {
  const { data, error } = await supabase.from("users").select();

  if (error) {
    return { props: { err: "Failed to retrieve users" } };
  }

  if (data) {
    return { props: { users: data } };
  }
}


export default function Home(props) {
  return (
    <div>
      <ul>
        {props.err && <li>{props.err}</li>}
        {props.users && props.users.map((user) => (
            user.id + '-' + user.name + ', '
          ))}
      </ul>
    </div>
  );
}
