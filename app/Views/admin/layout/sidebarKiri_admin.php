<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-light-danger elevation-2">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link text-center myBrandLink">
        <img src="/img/mrpediaicon.png" width="60px" class="img-circle" alt="icon">
    </a>

    <!-- Sidebar -->
    <div class="sidebar pt-4">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img src="/img/upload/<?= $user['img']; ?>" class="img-circle " alt="User Image">
            </div>
            <div class="info">
                <?php if (strlen($user['username']) < 17) : ?>
                    <p><?= $user['username']; ?></p>
                <?php else : ?>
                    <p><?= substr($user['username'], 0, 17) . '...'; ?></p>
                <?php endif; ?>
            </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="true">
                <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
                <li class="nav-item menu-open">
                    <div class="nav-link dashboardMenu active">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>
                            Dashboard
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </div>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <div class="nav-link active">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Utama</p>
                            </div>
                        </li>
                    </ul>
                    <hr>
                </li>

                <li class="nav-item">
                    <div class="nav-link menuOpen adminMenu active">
                        <i class="nav-icon fas fa-user-shield"></i>
                        <p>
                            Admin
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </div>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <div class="nav-link listAdminLink">
                                <i class="far fa-circle nav-icon"></i>
                                <p>List Admin</p>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-link tambahAdminLink">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Tambah Admin</p>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-link no-cursor detailAdminLink">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Detail Admin</p>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-link no-cursor editAdminLink">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Edit Admin</p>
                            </div>
                        </li>
                    </ul>
                </li>

                <li class="nav-item mt-3">
                    <div class="nav-link menuOpen memberMenu active">
                        <i class="nav-icon fas fa-users"></i>
                        <p>
                            Member
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </div>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <div class="nav-link listMemberLink">
                                <i class="far fa-circle nav-icon"></i>
                                <p>List Member</p>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-link tambahMemberLink">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Tambah Member</p>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-link no-cursor detailMemberLink">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Detail Member</p>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-link no-cursor editMemberLink">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Edit Member</p>
                            </div>
                        </li>
                    </ul>
                </li>

                <li class="nav-item mt-3">
                    <div class="nav-link menuOpen produkMenu active">
                        <i class="nav-icon fas fa-tags"></i>
                        <p>
                            Produk
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </div>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <div class="nav-link listProdukLink no-cursor">
                                <i class="far fa-circle nav-icon"></i>
                                <p>List Produk</p>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-link detailProdukLink no-cursor">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Detail Produk</p>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-link editProdukLink no-cursor">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Edit Produk</p>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>