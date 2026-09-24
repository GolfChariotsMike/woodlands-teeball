"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function ClinicForm() {
  const [form, setForm] = useState({
    child_name: "",
    child_age: "",
    grade: "",
    school: "",
    parent_name: "",
    phone: "",
    email: "",
    medical_notes: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="mx-auto max-w-md overflow-hidden rounded-2xl text-center shadow-xl bg-paper">
        <div className="bg-club px-8 py-6">
          <Image
            src="/brand/logo.png"
            alt="Woodlands Teeball Club"
            width={100}
            height={102}
            className="mx-auto"
          />
        </div>
        <div className="p-8">
          <h1 className="mb-2 font-display text-2xl font-bold text-club">
            You&apos;re registered!
          </h1>
          <p className="text-ink/70">
            We&apos;ll be in touch with clinic details. See you on the diamond!
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex font-display text-xs font-bold uppercase tracking-[0.14em] text-clay"
          >
            Back to the club
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg overflow-hidden rounded-2xl bg-paper shadow-xl">
      <div className="bg-[#7a1c1c] px-6 py-4 text-center text-white">
        <p className="text-sm font-bold uppercase tracking-wide">
          Clinic cancelled — weather
        </p>
        <p className="mt-1 text-sm">
          Tomorrow&apos;s after school clinic at DVPS/ISWA has been cancelled due
          to the weather.
        </p>
      </div>

      <div className="bg-club px-8 py-7 text-center text-white">
        <Image
          src="/brand/logo.png"
          alt="Woodlands Teeball Club"
          width={100}
          height={102}
          className="mx-auto mb-3"
        />
        <h1 className="font-display text-xl font-bold uppercase tracking-wide">
          Woodlands Teeball Club
        </h1>
        <p className="mt-1 text-sm font-semibold text-clay">
          After School Clinic — Registration
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 p-8">
        <p className="text-sm text-ink/70">
          This form is for the after school clinic. Saturday season registration
          is on the{" "}
          <Link href="/register" className="font-semibold text-club underline">
            register page
          </Link>
          .
        </p>

        <div>
          <label className="mb-1 block text-sm font-bold uppercase tracking-wide text-club">
            Child&apos;s Full Name <span className="text-clay">*</span>
          </label>
          <input
            type="text"
            name="child_name"
            required
            value={form.child_name}
            onChange={handleChange}
            className="w-full rounded-lg border-2 border-[#d4c4a0] bg-white px-4 py-2.5 focus:outline-none"
            placeholder="e.g. Jack Smith"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-bold uppercase tracking-wide text-club">
            School
          </label>
          <input
            type="text"
            name="school"
            value={form.school}
            onChange={handleChange}
            className="w-full rounded-lg border-2 border-[#d4c4a0] bg-white px-4 py-2.5 focus:outline-none"
            placeholder="e.g. Woodlands Primary School"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm font-bold uppercase tracking-wide text-club">
              Age
            </label>
            <input
              type="text"
              name="child_age"
              value={form.child_age}
              onChange={handleChange}
              className="w-full rounded-lg border-2 border-[#d4c4a0] bg-white px-4 py-2.5 focus:outline-none"
              placeholder="e.g. 8"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-bold uppercase tracking-wide text-club">
              Year / Grade
            </label>
            <select
              name="grade"
              value={form.grade}
              onChange={handleChange}
              className="w-full rounded-lg border-2 border-[#d4c4a0] bg-white px-4 py-2.5 focus:outline-none"
            >
              <option value="">Select...</option>
              {[
                "Pre-Primary",
                "Year 1",
                "Year 2",
                "Year 3",
                "Year 4",
                "Year 5",
                "Year 6",
              ].map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-bold uppercase tracking-wide text-club">
            Parent / Guardian Name <span className="text-clay">*</span>
          </label>
          <input
            type="text"
            name="parent_name"
            required
            value={form.parent_name}
            onChange={handleChange}
            className="w-full rounded-lg border-2 border-[#d4c4a0] bg-white px-4 py-2.5 focus:outline-none"
            placeholder="e.g. Sarah Smith"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-bold uppercase tracking-wide text-club">
            Phone Number <span className="text-clay">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-lg border-2 border-[#d4c4a0] bg-white px-4 py-2.5 focus:outline-none"
            placeholder="e.g. 0412 345 678"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-bold uppercase tracking-wide text-club">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border-2 border-[#d4c4a0] bg-white px-4 py-2.5 focus:outline-none"
            placeholder="e.g. sarah@email.com"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-bold uppercase tracking-wide text-club">
            Medical Notes / Allergies
          </label>
          <textarea
            name="medical_notes"
            value={form.medical_notes}
            onChange={handleChange}
            rows={3}
            className="w-full rounded-lg border-2 border-[#d4c4a0] bg-white px-4 py-2.5 focus:outline-none"
            placeholder="Any medical conditions or allergies we should know about (optional)"
          />
        </div>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <p className="text-center text-sm font-semibold text-club">
          A parent or guardian must remain on-site for the duration of each
          training session.
        </p>

        <button
          type="submit"
          disabled
          className="w-full rounded-lg bg-club py-3 font-bold uppercase tracking-widest text-white opacity-50"
        >
          {status === "loading"
            ? "Sending..."
            : "Registration Currently Unavailable"}
        </button>

        <p className="text-center text-xs text-[#888]">
          Woodlands Reserve, Teakwood Ave, Woodlands WA 6018
        </p>
        <p className="text-center text-xs">
          <Link href="/" className="text-club underline underline-offset-2">
            Club home
          </Link>
          <span className="px-2 text-[#888]">·</span>
          <Link href="/scroll" className="text-club underline underline-offset-2">
            Watch the film
          </Link>
        </p>
      </form>
    </div>
  );
}
