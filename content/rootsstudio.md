---
title: Roots Studio
navigation:
  id: "rootsstudio"
  description: "Roots Studio works with artists in India and China, digitizes their art and stories and licenses them to global fashion brands..."
  width: 2
  tag: "engineering"
  order: 2
---

::header-c
#image
:img-c{name="thumbnail" project="rootsstudio" bottom-margin="mb-3"}

#title
{{ $doc.title }}

#description
Roots Studio works with artists in India and China, digitizes their art and stories and licenses them to global fashion brands. Profits are shared fairly with the artists and their communities.

#tag
ENGINEERING
::

::body-c
Over the past years, I worked on [Roots Studio](https://rootsstudio.co/){:target="\_blank" style="text-decoration: underline;"}'s digital infrastructure. Digital designers turn scanned artwork into high-resolution image files into a Google Drive. Previously, there was no downstream processing of these assets, meaning that presenting them to potential clients had to be done manually, an inefficient, time-intensive process.

I set up a simple Airtable Database to allow adding metadata such as artist and tribe as well as tagging images with color, style to allow easy categorizing. I created a series of Python scripts to automatically generate watermarked images optimized for browser, upload web images, original high-resolution patterns and associated metadata to Amazon S3 and batch import them into Roots Studio's existing Shopify store as digital products.

Finally, I added a password-protected section to the existing digital storefront allowing clients to browse through this pattern library, search by color and style tags and receive digital files.
::
