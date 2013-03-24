var validEmails = [
  'email@domain.com',
  'firstname.lastname@domain.com',
  'email@subdomain.domain.com',
  'firstname+lastname@domain.com',
  'email@123.123.123.123',
  'email@[123.123.123.123]',
  '"email"@domain.com',
  '1234567890@domain.com',
  'email@domain-one.com',
  '_______@domain.com',
  'email@domain.name',
  'email@domain.co.jp',
  'firstname-lastname@domain.com'
];

var invalidEmails = [
  'plainaddress',
  '@domain.com',
  'Joe Smith <email@domain.com>',
  'email.domain.com',
  '.email@domain.com',
  'email.@domain.com',
  'email..email@domain.com',
  'あいうえお@domain.com',
  'email@domain.com',
  'email@domain',
  'email@-domain.com',
  'email@domain.web',
  'email@111.222.333.44444',
  'email@domain..com'
];

var hellMode = [
  '"Abc\@def"@example.com',
  '"Fred Bloggs"@example.com',
  '"Joe\\Blow"@example.com',
  '"Abc@def"@example.com',
  'customer/department=shipping@example.com',
  '$A12345@example.com',
  '!def!xyz%abc@example.com',
  '_somename@example.com'
];
