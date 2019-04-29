const {writeFileSync} = require('fs');
const {parse} = require('json2csv');
const Meetup = require('meetup-api');

const group = process.argv[2];
const meetup = Meetup({key: process.env.MEETUP_API_KEY});
const members = [];
const fields = [
  'id',
  {label: 'Username', value: 'name'},
  {label: 'Status', value: 'status'},
  {label: 'Joined', value: 'joined'},
  {label: 'Visited', value: 'visited'},
  {label: 'Meetup Profile', value: 'link'},
  {label: 'Twitter', value: 'other_services.twitter.identifier'},
  {label: 'Facebook', value: 'other_services.facebook.identifier'},
  {label: 'Tumblr', value: 'other_services.tumblr.identifier'},
  {label: 'LinkedIn', value: 'other_services.linkedin.identifier'},
  {label: 'Hometown', value: 'hometown'},
  {label: 'City', value: 'city'},
  {label: 'State', value: 'state'},
  {label: 'Country', value: 'country'},
  {label: 'Longitude', value: 'lon'},
  {label: 'Latitude', value: 'lat'},
];

let offset = 0;

function writeCSV(results) {
  const csv = parse(results, {fields});

  try {
    writeFileSync(`${group}.csv`, csv, 'utf8');
  } catch (err) {
    throw err;
  }

  console.log(`Successfully created ${group}.csv`); // eslint-disable-line no-console
}

function getMembers() {
  const options = {group_urlname: group, offset};

  meetup.getMembers(options, (err, {results, meta}) => {
    if (err) {
      throw err;
    }

    members.push(...results);

    if (!meta.next) {
      return writeCSV(members);
    }

    offset += 1;
    return getMembers();
  });
}

getMembers();
