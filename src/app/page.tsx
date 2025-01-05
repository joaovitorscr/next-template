import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyInlineCode,
  TypographyLarge,
  TypographyLead,
  TypographyList,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from '@/components/typography'

export default function Home() {
  return (
    <main>
      <TypographyH1>Teste H1</TypographyH1>
      <TypographyH2>Teste H2</TypographyH2>
      <TypographyH3>Teste H3</TypographyH3>
      <TypographyH4>Teste H4</TypographyH4>
      <TypographyP>Teste Paragraph</TypographyP>
      <TypographyBlockquote>
        &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
        it&apos;s only fair that they should pay for the privilege.&quot;
      </TypographyBlockquote>
      <TypographyList>
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </TypographyList>
      <TypographyInlineCode>@radix-ui/react-alert-dialog</TypographyInlineCode>
      <TypographyLead>
        A modal dialog that interrupts the user with important content and
        expects a response.
      </TypographyLead>
      <TypographyLarge>Are you absolutely sure?</TypographyLarge>
      <TypographySmall>Email address</TypographySmall>
      <TypographyMuted>Enter your email address.</TypographyMuted>
    </main>
  )
}
