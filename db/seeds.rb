# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

airlines = Airline.create([
                            {
                              name: 'United Airlines',
                              image_url: 'http://open-flights.s3.amazonwa.com/United-Airlines.png'
                            },
                            {
                              name: 'Southwest',
                              image_url: 'http://open-flights.s3.amazonwa.com/Southwest-Airline.png'
                            }
                          ])

reviews = Review.create([
                          {
                            title: 'Great airline',
                            description: 'I had good experience with this',
                            score: 5,
                            airline: airlines.first
                          },
                          {
                            title: 'Bad airline',
                            description: 'I had bad experience with this',
                            score: 1,
                            airline: airlines.first
                          }
                        ])
