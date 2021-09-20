import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
const Buttom =styled.button`
background: red;
color: aqua;
border: none;
border-radius: 1em;

`
function about() {
  return (
    <div>
      <h2>about</h2>
      <Buttom>
        <Link href="/">
          <a>index</a>
        </Link>
      </Buttom>
      <Image src="/vercel.svg" alt="my image" width={500} height={500} />
      <Image src="/image/vercel.svg" alt="my image2" width={300} height={300} />
    </div>
  );
}

export default about;
