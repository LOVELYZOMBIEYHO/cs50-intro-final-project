import Link from "next/link";
import Image from "next/image";

export default function Studentshow({ student }) {
  return (
    <div>
      <p>{student.id}</p>
      <p>{student.title}</p>
      <p>{student.email}</p>
    </div>
  );
}
