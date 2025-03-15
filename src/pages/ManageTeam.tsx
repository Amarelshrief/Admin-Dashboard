import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Teams = [
  {
    ID: "1",
    Name: "John Doe",
    Email: "johndoe@example.com",
    Age: "25",
    Phone: "(555) 104-1234",
    Access: "Admin",
  },
  {
    ID: "2",
    Name: "Carsel Lee",
    Email: "carsellee@example.com",
    Age: "28",
    Phone: "(777) 456-7890",
    Access: "Admin",
  },
  {
    ID: "3",
    Name: "James Smith",
    Email: "jamessmith@example.com",
    Age: "30",
    Phone: "(333) 875-4321",
    Access: "Manager",
  },
  {
    ID: "4",
    Name: "Anya Stark",
    Email: "anyastark@example.com",
    Age: "32",
    Phone: "(444) 786-1234",
    Access: "Manager",
  },
  {
    ID: "5",
    Name: "Asmhan Ali",
    Email: "asmhanali@example.com",
    Age: "35",
    Phone: "(555) 555-5555",
    Access: "Manager",
  },
  {
    ID: "6",
    Name: "Bojan Kovacevic",
    Email: "bojankovacevic@example.com",
    Age: "38",
    Phone: "(666) 666-6666",
    Access: "User",
  },
  {
    ID: "7",
    Name: "Ferran Del Olmo",
    Email: "ferrandelolmo@example.com",
    Age: "40",
    Phone: "(777) 777-7777",
    Access: "User",
  },
  {
    ID: "8",
    Name: "Rossini Roy",
    Email: "rossiniroy@example.com",
    Age: "45",
    Phone: "(888) 888-8888",
    Access: "User",
  },
  {
    ID: "9",
    Name: "Harry Potter",
    Email: "harrypotter@example.com",
    Age: "50",
    Phone: "(999) 999-9999",
    Access: "User",
  },
];

// let access: React.ReactNode;

// if (access === "Admin") {
//   access = <TableCell className="text-xl bg-purple-600">{access}</TableCell>;
// } else if (access === "Manager") {
//   access = <TableCell className="text-xl bg-amber-700">{access}</TableCell>;
// } else if (access === "User") {
//   access = <TableCell className="text-xl bg-blue-950">{access}</TableCell>;
// }

export default function ManageTeamPage() {
  return (
    <main>
      <div>
        <h1 className="text-3xl">Teams</h1>
      </div>
      <div className="mt-4 text-gray-500">
        <p>Managing The Team Members</p>
      </div>
      <div className="mt-4">
        <Table className="border-2 border-gray-200 rounded-lg">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">ID</TableHead>
              <TableHead className="text-center">Name</TableHead>
              <TableHead className="text-center">Email</TableHead>
              <TableHead className="text-center">Age</TableHead>
              <TableHead className="text-center">Phone</TableHead>
              <TableHead className="text-center">Access</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Teams.map((team) => (
              <TableRow className="text-center" key={team.ID}>
                <TableCell className="text-xl">{team.ID}</TableCell>
                <TableCell className="text-xl">{team.Name}</TableCell>
                <TableCell className="text-xl">{team.Email}</TableCell>
                <TableCell className="text-xl">{team.Age}</TableCell>
                <TableCell className="text-xl">{team.Phone}</TableCell>
                <TableCell className="text-xl">{team.Access}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
