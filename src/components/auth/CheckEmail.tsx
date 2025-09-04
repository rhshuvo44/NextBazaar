import Link from "next/link";

const CheckEmail = () => {
  return (
    <p className="text-sm">
      Back to{" "}
      <Link href="/auth/signin" className="underline">
        Login
      </Link>
    </p>
  );
};

export default CheckEmail;
