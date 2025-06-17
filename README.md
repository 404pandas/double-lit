📚 Double Wiki — Literature Author Wiki Challenge

Double Wiki is a full-stack application designed to manage and display a growing database of literature authors from around the world. Built using modern web technologies like TypeScript, GraphQL, Apollo Server, Knex, and SQLite, the project showcases best practices for building scalable, maintainable APIs in a collaborative engineering environment.

This challenge simulates real-world product development by asking engineers to:

Debug existing API issues 🐛

Extend a GraphQL schema with computed fields 💡

Integrate with external REST APIs using Axios 🌐

Format names based on cultural conventions (e.g., Japanese 🇯🇵)

Handle CRUD operations for authors 🛠

Design for scalability with pagination 📄

The project emphasizes clean code, thoughtful API design, and developer-friendly features. It's a great example of balancing technical execution with product and user needs.

💬 If you're into building polished backends that make frontend teams smile — this one's for you.

---

## 🚀 Project Setup

```bash
# 1️⃣ Install dependencies & initialize DB
npm run once

# 2️⃣ Start the app (with auto-restart on changes)
npm start
```

---

## 🔧 Technologies & Tooling

| Tech / Library             | Badge                                                                 |
|---------------------------|------------------------------------------------------------------------|
| Apollo Server              | ![Apollo Server](https://img.shields.io/badge/Apollo_Server-4.12.2-blueviolet) |
| Apollo REST DataSource     | ![Apollo REST](https://img.shields.io/badge/@apollo/datasource--rest-6.4.1-purple) |
| Axios                      | ![Axios](https://img.shields.io/badge/Axios-1.9.0-ff69b4)              |
| GraphQL                    | ![GraphQL](https://img.shields.io/badge/GraphQL-16.11.0-e10098)        |
| GraphQL Tag                | ![gql-tag](https://img.shields.io/badge/graphql--tag-2.12.6-lightgrey) |
| Knex                       | ![Knex](https://img.shields.io/badge/Knex-3.1.0-orange)                |
| SQLite3                    | ![SQLite3](https://img.shields.io/badge/sqlite3-5.1.7-blue)            |
| TypeScript                 | ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178c6)    |
| ts-node-dev                | ![ts-node-dev](https://img.shields.io/badge/ts--node--dev-2.0.0-yellowgreen) |
| Prettier                   | ![Prettier](https://img.shields.io/badge/Prettier-3.5.3-ff69b4)        |

---

## 🗺️ Roadmap

### ✅ Level 1: Empty list of authors
🔍 Debug why authors aren't being returned and fix it!

### ✅ Level 2: `displayName` field
🧑‍🎤 Add a computed field combining `givenName` and `familyName`.

### ✅ Level 3: Country name resolution
🌐 Use `src/lib/Countries.ts` to resolve a 2-letter country code to a full country name.

### ✅ Level 4: Country-specific naming
🇯🇵 If the country is Japan, show `FamilyName GivenName` instead.

### ✅ Level 5: Fetch single author
📄 Add a GraphQL query to retrieve one author by ID.

### ✅ Level 6: Pronouns
🧑‍🤝‍🧑 Store and expose `pronouns` field in the database and GraphQL.

### ✅ Level 7: Create & edit authors
📝 Add mutations to create and update author entries (no auth needed).

### ✅ Level 8: Pagination
📚 Implement offset-based pagination for the authors list query.

---

## 🧠 Final Questions

1. ⏱️ How long did you spend on this challenge?
   - This coding challenge took me approximately 3 hours! It was a fun little challenge! Thank you for the opportunity!
3. 🧰 How familiar were you with the libraries/tools used?
   - Apollo Server (10 years of experience)
   - Axios (10 years of experience)
   - GraphQL (10 years of experience)
   - Knex (New to me! I had a very great relationship with it!)
   - SQLite3 (SQL is not new to me, but this package was new to me. I had to do a lot more reading on this package than Knex, which was a lot more intuitive)
   - TypeScript (10 years of experience)
   - Prettier (10 years of experience)
5. 🚀 What would you add/change with more time?
   -  I’d implement stronger input validation both at the GraphQL schema level and at the database layer to prevent invalid or inconsistent data. (Ask me how much I love throwing ENUM into projects!)
   -  If I had all the time in the world, I would love to add a front end to this project. While I'm a bouncer, front end is where my passion truly lies!
7. 💬 Any feedback for the team?
   - When developing the Country Code, the seeds included country codes for all authors. I would have loved to see a seed with no country code, so I can test my code that returns "No Country Code" if an author doesn't have an author.countryCode
