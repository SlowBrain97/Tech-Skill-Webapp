import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { QuestionsService } from './modules/questions/questions.service';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const questionsService = app.get(QuestionsService);

    const questions = [
        {
            topic: 'js',
            difficulty: 'fresher',
            tags: ['basic', 'variable'],
            content: {
                en: { title: 'What is let?', body: 'Explain let keyword', solution: 'Block scoped variable' },
                jp: { title: 'letとは?', body: 'letキーワードを説明', solution: 'ブロックスコープ変数' },
                vi: { title: 'let là gì?', body: 'Giải thích từ khóa let', solution: 'Biến phạm vi block' },
            },
        },
        {
            topic: 'react',
            difficulty: 'junior',
            tags: ['hooks', 'state'],
            content: {
                en: { title: 'What is useState?', body: 'Explain useState hook', solution: 'Manage state in functional component' },
                jp: { title: 'useStateとは?', body: 'useStateフックを説明', solution: '関数コンポーネントで状態管理' },
                vi: { title: 'useState là gì?', body: 'Giải thích hook useState', solution: 'Quản lý state trong functional component' },
            },
        },
    ];

    for (const q of questions) {
        await questionsService.create(q);
        console.log(`Created question: ${q.content.en.title}`);
    }

    await app.close();
}
bootstrap();
