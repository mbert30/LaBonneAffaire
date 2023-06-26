drop table if exists utilisateur;
drop table if exists comentaireUtilisateur;
drop table if exists annonce;
drop table if exists comentaireAnnonce;
drop table if exists categorie;
drop table if exists typeCompte;
drop table if exists ville;

create table utilisateur
(
    ID_Utilisateur serial primary key,
    nom varchar(36) not null,
    prenom varchar(38) not null,
    adresseEmail varchar(254) not null,
    Mdp char(60) not null,
    Ntel varchar(10),
    adressePostal varchar(32),
    complementAdresse varchar(32),
    ID_Ville int,
    ID_TypeCompte int not null
);

create table comentaireUtilisateur
(
    ID_ComentaireUtilisateur serial primary key,
    ID_UtilisateurDestinataire int,
    ID_Utilisateur int not null,
    horodatage timestamp not null,
    TexteCommentaire text not null
);

create table annonce
(
    ID_Annonce serial primary key,
    libelleAnnonce varchar(100) not null,
    descriptionAnnonce TEXT not null,
    ID_Utilisateur int not null,
    prix numeric(11,2) not null default 0,
    PossibleNego boolean not null default false,
    ID_Categorie int not null
);

create table comentaireAnnonce
(
    ID_ComentaireAnnonce serial primary key,
    ID_Annonce int not null,
    ID_Utilisateur int not null,
    horodatage timestamp not null,
    TexteCommentaire text not null
);

create table categorie
(
    ID_Categorie serial primary key,
    libelleCategorie varchar(70) not null
);

create table typeCompte
(
    ID_TypeCompte serial primary key,
    libelleTypeCompte varchar(70) not null
);

create table ville 
(
    ID_Ville serial primary key,
    libelleVille varchar(38) not null,
    codePostal varchar(8) not null
);

alter table utilisateur add constraint foreign key (ID_Ville) REFERENCES ville(ID_Ville);
alter table utilisateur add constraint foreign key (ID_TypeCompte) REFERENCES typeCompte(ID_TypeCompte);
alter table comentaireUtilisateur add constraint foreign key (ID_UtilisateurDestinataire) REFERENCES utilisateur(ID_Utilisateur);
alter table comentaireUtilisateur add constraint foreign key (ID_Utilisateur) REFERENCES utilisateur(ID_Utilisateur);
alter table annonce add constraint foreign key (ID_Utilisateur) REFERENCES utilisateur(ID_Utilisateur);
alter table annonce add constraint foreign key (ID_Categorie) REFERENCES categorie(ID_Categorie);
alter table comentaireAnnonce add constraint foreign key (ID_Utilisateur) REFERENCES utilisateur(ID_Utilisateur);
alter table comentaireAnnonce add constraint foreign key (ID_Annonce) REFERENCES annonce(ID_Annonce);


-- sequelize-auto -h localhost -d oui -u root -p 3306 --dialect mysql