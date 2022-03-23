/**
 * ======================================================================
 * Copyright (C) 2021-2022  Yobny Technology Solutions
 * This file is part of QueueOne project.
 * ======================================================================
 */
import * as React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import queueStoreStrings from './StringConstants'

/**
 * Generic Page Header Component
 * @returns HTML element
 */
export default function PageHeadSection() {
  const router = useRouter()

  return (
    <Head key={router.pathname}>
      <title>{queueStoreStrings.queueOneHeading}</title>
      <meta
        name="description"
        content={queueStoreStrings.queueOneDescription}
      />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="author" content={queueStoreStrings.queueOneAuthor} />
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />
    </Head>
  )
}
