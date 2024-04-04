import { GraphQLDefinitionsFactory } from '@nestjs/graphql'
import { join } from 'path'

const definitionsFactory = new GraphQLDefinitionsFactory()
definitionsFactory
  .generate({
    typePaths: ['./**/*.schema.graphql'],
    path: join(__dirname, 'type.ts')
  })
  .then(() => console.log('Generated new file'))
