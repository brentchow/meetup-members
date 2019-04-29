# Meetup Attendees

Fetch information about a [Meetup][] Group's attendees.

## Requirements

- [Meetup API Key][]
- [Node.js][]
- [Yarn][]

## Getting Started

Install dependencies using [Yarn][].

```shell
yarn
```

Add your Meetup API Key to your environment variables or the `.env` file.

```shell
MEETUP_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXX
```

If you added your Meetup API Key to your `.env` file use the `start-local` script. Otherwise use `yarn start "group-name"`.

```shell
yarn start-local "group-name"
```

Provide the name of the Meetup Group as a command arguement. For example, if the Meetup Group's URL is `https://www.meetup.com/ny-tech/`, use the value `ny-tech` in the command.

[Meetup]: https://www.meetup.com/
[Meetup API Key]: https://secure.meetup.com/meetup_api/key/
[Node.js]: https://nodejs.org/
[Yarn]: https://yarnpkg.com/