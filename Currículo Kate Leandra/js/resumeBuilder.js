var bio = {
    "name": "Kate Leandra Alves de Melo",
    "role": "Front-end Developer",
    "contacts": {
        "mobile": "55 31-97363-3974",
        "email": "kateleandra@hotmail.com",
        "github": "Kateleandra",
        "twitter": "@kateleandra",
        "location": "Belo Horizonte/MG - Brasil"
    },
    "biopic": "images/foto.png",
    "welcomeMessage": "Olá! Bem vindo ao meu currículo segue os motivos que você deve me contratar! Profissional formada em Administração e MBA Governança em TI. Atualmente sou estudante de análise e desenvolvimento de sistema e sempre estou a procura de oportunidades para aprender coisas novas e me atualizar.",
    "skills": ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Acessibilidade Web"]
};
bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    if (bio.skills.length > 0) {
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedPic);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedMessage);
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });
    };
}

function inName(name) {
    name = name.trim().split(" "); //trim remove espaço em branco da frente e de trás.
    console.log(name);
    name[4] = name[4].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase();
    name[0].slice(4).toLowerCase();
    return name[0] + " " + name[4];
}
$('#main').append(internationalizeButton);

bio.display();


bio.contacts.display = function() {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);

}
bio.contacts.display();

var work = {
    "jobs": [{
        "employer": "Henko TI",
        "title": "Developer",
        "location": "Belo Horizonte/MG",
        "Dates": "Junho/2017 - Atual",
        "description": "Desenvolvimento Web"
    }, {
        "employer": "Analista Financeiro",
        "title": "Administradora 5 Estrelas Special Service",
        "location": "Belo Horizonte/MG",
        "Dates": "06/2016 - 12/16",
        "description": "Contas a pagar, faturamento, controle de gastos, compra de produtos de limpeza e uniformes, administração de maquinas e equipamentos de segurança, implatação de melhorias, treinamentos e liberação de notas fiscais."

    }, {
        "employer": "Innova Property Management",
        "title": "Auxiliar Operacional",
        "location": "Contagem/MG",
        "Dates": "10/2014 - 11/2015",
        "description": "Administração de condomínio logís co; elaboração de relatórios, planilhas financeira e operacional. Liberação de notas fiscais; fluxo de caixa; análise de custos; cotação de compras; Implantação e auditoria de processos de qualidade com definições de ações e prazos. Supervisão das equipes e ro nas operacionais de manutenção, revitalização, limpeza, paisagismo, segurança, entre outros."
    }, {
        "employer": "Foco Distribuidora",
        "title": "Auxiliar Financeiro",
        "location": "Belo Horizonte/MG",
        "Dates": "07/2013 - 09/2014",
        "description": "Contas a pagar e receber; acertos e liberação de pagamentos em geral; fluxo de caixa; controle de ponto; cobrança de clientes."
    }, {
        "employer": "Companhia Energética de Minas Gerais – CEMIG",
        "title": "Auxiliar Riscos Corporativos.",
        "location": "Belo Horizonte/MG",
        "Dates": "02/2012 - 11/2012",
        "description": "Revisões periódicas da matriz de riscos e controles estratégicos. Elaboração de documentos de compliance: Relatório de Administração, Relatório Anual, Relatório de Sustentabilidade, Formulário 20F e relatórios gerenciais para subsídio ao Comitê de Monitoramento de Riscos Corporativos."
    }]
};

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].Dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

var education = {
    "schools": [{
            "name": "Centro Universitário UNA",
            "location": "Belo Horizonte/MG",
            "dates": "2016 - 2018",
            "majors": "Análise e Desenvolvimento de Sistemas",
            "degree": "Tecnólogo Tecnologia da Informação"
        },
        {
            "name": "Centro Universitário UNA",
            "location": "Belo Horizonte/MG",
            "dates": "2013 - 2014",
            "majors": "MBA Governança em TI (Melhores Práticas)",
            "degree": "MBA-Pós Graduação"
        },
        {
            "name": "Faculdade Senac Minas",
            "location": "Contagem/MG",
            "dates": "2008 - 2012",
            "majors": "Administração de Empresas",
            "degree": "Bacharelado em Administração"
        }
    ],
    "onlineCourses": [{
        "title": "Front End Web Developer - Nanodegree",
        "school": "Udacity",
        "dates": "2017 - 2017",
        "url": "https://br.udacity.com"
    }]
};

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedName + formattedDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajor);
    }
}
education.display();

education.onlineCourses.forEach(function(course) {
    $("#onlineCourses").append(HTMLonlineClasses);
    var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
    $(".education-entry:last").append(formattedTitle);
    var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
    $(".education-entry:last").append(formattedSchool);
    var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
    $(".education-entry:last").append(formattedDates);
    var formattedURL = HTMLonlineURL.replace("%data%", course.url);
    $(".education-entry:last").append(formattedURL);
});

education.course.display();


var projects = {
    "projects": [{
        "title": "Dizconto",
        "dates": "Abril de, 2014",
        "description": "Plataforme para clientes online receberem seu dinheiro de volta diante de uma porcentagem em suas compras.",
        "images": "./images/dizconto.png"
    }]
};

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $('#projects').append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $('.project-entry:last').append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $('.project-entry:last').append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $('.project-entry:last').append(formattedDescription);
        if (project.images.length > 0) {
            for (image in projects.projects[project].image) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }

        }
    }
}
projects.display();

$('#mapDiv').append(googleMap);