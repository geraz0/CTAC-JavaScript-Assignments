let gmail = {
    user: {
        name: 'Gabbi Erazo',
        email: 'gabbi.erazo1@gmail.com',
        age: 24,
        city: 'Wilmington'
    },
    mailbox: [
        'primary',
        'promotions',
        'social',
    ],
    starred: [
        'from',
        'any time',
        'has attachment',
        'exclude calendar updates',
        'to',
        'advanced search',
    ],
    sent: [
       {name: 'King Tecpile Gonzalez', email: 'kingtecpilegonz@gmail.com', lastmessage: "this is your finished resume"},
       {name: 'Keegan Meyer', email: 'keegan@stiegleredtech.org', lastmessage: "I wanted to confirm the location we will be meeting at for the program."}
    ],
    drafts: [],
    spam: [],
    trash: [],
};

    let user = gmail.user;
    console.log("User info:" , user);

    let mailbox = gmail.mailbox;
    console.log("Mailbox info:" , mailbox);

    let starred = gmail.starred;
    console.log("Starred info:" , starred);

    let sent = gmail.sent;
    console.log("Sent info:" , sent);

    let drafts = gmail.drafts;
    console.log("Drafts info:" , drafts);

    let spam = gmail.spam;
    console.log("Spam info:" , spam);

    let trash = gmail.trash;
    console.log("Trash info:" , trash);


if (gmail && gmail.mailboxes) {
    let mailboxNames = Object.key(gmail.mailboxes);
    console.log("Mailbox Names:", mailboxNames);

    let secondEmailText = gmail.mailboxes.inbox[1].body;
    console.log("Text of Second Email:", secondEmailText);

    function markAsSent(email) {
        gmail.mailboxes.sent.push(email);
        console.log("Email sent:", email);
    }

// Example usage:
let emailToSend = { name: 'Tommy Mulligan', email: 'tom.mulligan@gmail.com', body: "What is for lunch tomorrow?" };
markAsSent(emailToSend);

function addDraft(email) {
    gmail.mailboxes.drafts.push(email);
    console.log("Draft email added:", email);
}

// Example usage:
let draftEmail = { name: 'Tommy Mulligan', email: 'tom.mulligan@gmail.com', body: "What is for lunch tomorrow?" };
addDraft(draftEmail);
markAsSent(draftEmail);


console.log("Updated Sent Emails:", gmail.mailboxes.sent);
console.log("Drafts:", gmail.mailboxes.drafts);

}